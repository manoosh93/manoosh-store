from flask import Blueprint, request, jsonify
from src.models.product import db, Product, Category
import requests
import json
from datetime import datetime

product_bp = Blueprint('product', __name__)

# نظام ربط المنتجات التلقائي - محاكاة API خارجي
def fetch_products_from_external_api():
    """
    محاكاة جلب المنتجات من API خارجي
    في التطبيق الحقيقي، ستحتاج إلى ربط APIs حقيقية من الموردين
    """
    # بيانات تجريبية لمحاكاة المنتجات
    sample_products = [
        {
            "name": "هاتف ذكي Samsung Galaxy",
            "description": "هاتف ذكي متطور بكاميرا عالية الجودة وبطارية طويلة المدى",
            "price": 299.99,
            "original_price": 399.99,
            "category": "إلكترونيات",
            "brand": "Samsung",
            "image_url": "https://via.placeholder.com/300x300/007bff/ffffff?text=Samsung+Galaxy",
            "external_url": "https://example.com/samsung-galaxy",
            "supplier_id": "SUPPLIER_001",
            "stock_quantity": 50,
            "rating": 4.5,
            "reviews_count": 128
        },
        {
            "name": "حقيبة يد نسائية أنيقة",
            "description": "حقيبة يد عصرية مصنوعة من الجلد الطبيعي",
            "price": 89.99,
            "original_price": 129.99,
            "category": "أزياء",
            "brand": "Fashion Plus",
            "image_url": "https://via.placeholder.com/300x300/dc3545/ffffff?text=Handbag",
            "external_url": "https://example.com/handbag",
            "supplier_id": "SUPPLIER_002",
            "stock_quantity": 25,
            "rating": 4.2,
            "reviews_count": 67
        },
        {
            "name": "ساعة ذكية رياضية",
            "description": "ساعة ذكية لتتبع اللياقة البدنية مع GPS",
            "price": 199.99,
            "original_price": 249.99,
            "category": "إلكترونيات",
            "brand": "FitTech",
            "image_url": "https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch",
            "external_url": "https://example.com/smartwatch",
            "supplier_id": "SUPPLIER_003",
            "stock_quantity": 35,
            "rating": 4.7,
            "reviews_count": 203
        },
        {
            "name": "كتاب تطوير الذات",
            "description": "دليل شامل لتطوير المهارات الشخصية والمهنية",
            "price": 24.99,
            "original_price": 34.99,
            "category": "كتب",
            "brand": "Knowledge Press",
            "image_url": "https://via.placeholder.com/300x300/ffc107/000000?text=Self+Development",
            "external_url": "https://example.com/self-dev-book",
            "supplier_id": "SUPPLIER_004",
            "stock_quantity": 100,
            "rating": 4.3,
            "reviews_count": 89
        },
        {
            "name": "مجموعة أدوات المطبخ",
            "description": "مجموعة كاملة من أدوات الطبخ عالية الجودة",
            "price": 149.99,
            "original_price": 199.99,
            "category": "منزل ومطبخ",
            "brand": "ChefMaster",
            "image_url": "https://via.placeholder.com/300x300/6f42c1/ffffff?text=Kitchen+Set",
            "external_url": "https://example.com/kitchen-set",
            "supplier_id": "SUPPLIER_005",
            "stock_quantity": 20,
            "rating": 4.6,
            "reviews_count": 156
        }
    ]
    
    return sample_products

@product_bp.route('/sync-products', methods=['POST'])
def sync_products():
    """
    مزامنة المنتجات من المصادر الخارجية
    """
    try:
        # جلب المنتجات من API خارجي
        external_products = fetch_products_from_external_api()
        
        synced_count = 0
        for product_data in external_products:
            # التحقق من وجود المنتج
            existing_product = Product.query.filter_by(
                supplier_id=product_data['supplier_id'],
                name=product_data['name']
            ).first()
            
            if existing_product:
                # تحديث المنتج الموجود
                existing_product.price = product_data['price']
                existing_product.original_price = product_data['original_price']
                existing_product.stock_quantity = product_data['stock_quantity']
                existing_product.rating = product_data['rating']
                existing_product.reviews_count = product_data['reviews_count']
                existing_product.updated_at = datetime.utcnow()
            else:
                # إضافة منتج جديد
                discount_percentage = 0
                if product_data.get('original_price') and product_data['original_price'] > product_data['price']:
                    discount_percentage = round(((product_data['original_price'] - product_data['price']) / product_data['original_price']) * 100, 2)
                
                new_product = Product(
                    name=product_data['name'],
                    description=product_data['description'],
                    price=product_data['price'],
                    original_price=product_data.get('original_price'),
                    discount_percentage=discount_percentage,
                    category=product_data['category'],
                    brand=product_data['brand'],
                    image_url=product_data['image_url'],
                    external_url=product_data['external_url'],
                    supplier_id=product_data['supplier_id'],
                    stock_quantity=product_data['stock_quantity'],
                    rating=product_data['rating'],
                    reviews_count=product_data['reviews_count']
                )
                db.session.add(new_product)
            
            synced_count += 1
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': f'تم مزامنة {synced_count} منتج بنجاح',
            'synced_count': synced_count
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': f'خطأ في مزامنة المنتجات: {str(e)}'
        }), 500

@product_bp.route('/products', methods=['GET'])
def get_products():
    """
    جلب قائمة المنتجات مع إمكانية التصفية والبحث
    """
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        category = request.args.get('category')
        search = request.args.get('search')
        sort_by = request.args.get('sort_by', 'created_at')
        sort_order = request.args.get('sort_order', 'desc')
        
        query = Product.query.filter_by(is_active=True)
        
        # تصفية حسب الفئة
        if category:
            query = query.filter(Product.category.ilike(f'%{category}%'))
        
        # البحث في اسم المنتج والوصف
        if search:
            query = query.filter(
                db.or_(
                    Product.name.ilike(f'%{search}%'),
                    Product.description.ilike(f'%{search}%')
                )
            )
        
        # الترتيب
        if sort_order == 'desc':
            query = query.order_by(getattr(Product, sort_by).desc())
        else:
            query = query.order_by(getattr(Product, sort_by).asc())
        
        # التصفح
        products = query.paginate(
            page=page, 
            per_page=per_page, 
            error_out=False
        )
        
        return jsonify({
            'success': True,
            'products': [product.to_dict() for product in products.items],
            'pagination': {
                'page': page,
                'per_page': per_page,
                'total': products.total,
                'pages': products.pages,
                'has_next': products.has_next,
                'has_prev': products.has_prev
            }
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'خطأ في جلب المنتجات: {str(e)}'
        }), 500

@product_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """
    جلب تفاصيل منتج محدد
    """
    try:
        product = Product.query.get_or_404(product_id)
        return jsonify({
            'success': True,
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'خطأ في جلب المنتج: {str(e)}'
        }), 500

@product_bp.route('/categories', methods=['GET'])
def get_categories():
    """
    جلب قائمة الفئات
    """
    try:
        categories = Category.query.filter_by(is_active=True).all()
        return jsonify({
            'success': True,
            'categories': [category.to_dict() for category in categories]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'خطأ في جلب الفئات: {str(e)}'
        }), 500

@product_bp.route('/featured-products', methods=['GET'])
def get_featured_products():
    """
    جلب المنتجات المميزة (أعلى تقييم أو أكثر مبيعاً)
    """
    try:
        limit = request.args.get('limit', 10, type=int)
        
        # المنتجات المميزة بناءً على التقييم وعدد المراجعات
        featured_products = Product.query.filter_by(is_active=True)\
            .filter(Product.rating >= 4.0)\
            .order_by(Product.rating.desc(), Product.reviews_count.desc())\
            .limit(limit).all()
        
        return jsonify({
            'success': True,
            'featured_products': [product.to_dict() for product in featured_products]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'خطأ في جلب المنتجات المميزة: {str(e)}'
        }), 500

@product_bp.route('/deals', methods=['GET'])
def get_deals():
    """
    جلب العروض والخصومات
    """
    try:
        limit = request.args.get('limit', 10, type=int)
        
        # المنتجات التي عليها خصم
        deals = Product.query.filter_by(is_active=True)\
            .filter(Product.discount_percentage > 0)\
            .order_by(Product.discount_percentage.desc())\
            .limit(limit).all()
        
        return jsonify({
            'success': True,
            'deals': [product.to_dict() for product in deals]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'خطأ في جلب العروض: {str(e)}'
        }), 500

