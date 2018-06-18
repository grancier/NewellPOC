(function (app) {
  app.isMobileCustomerGroup = false;
  app.zoomIsLoaded = false;
  app.contentID = '';
  app.categoryID = '';
  app.constants = {
    'AVAIL_STATUS_IN_STOCK': 'IN_STOCK',
    'AVAIL_STATUS_PREORDER': 'PREORDER',
    'AVAIL_STATUS_BACKORDER': 'BACKORDER',
    'AVAIL_STATUS_NOT_AVAILABLE': 'NOT_AVAILABLE',
    'PI_METHOD_GIFT_CERTIFICATE': 'GIFT_CERTIFICATE'
  };
  app.resources = {
    'SHIP_QualifiesFor': 'This shipment qualifies for',
    'CC_LOAD_ERROR': 'Couldn\'t load credit card!',
    'GET_ProductList_Err': 'product.error',
    'REG_ADDR_ERROR': 'Couldn\'t Load Address',
    'BONUS_PRODUCT': 'Bonus Product',
    'BONUS_PRODUCTS': 'Bonus Product',
    'SELECT_BONUS_PRODUCTS': 'Select Bonus Product',
    'SELECT_BONUS_PRODUCT': 'Select',
    'BONUS_PRODUCT_MAX': 'The maximum number of bonus products have been selected.  Please remove one in order to add additional bonus products.',
    'SIMPLE_SEARCH': '',
    'SUBSCRIBE_EMAIL_DEFAULT': 'Email Address',
    'CURRENCY_SYMBOL': '$',
    'MISSINGVAL': 'Please Enter {0}',
    'SERVER_ERROR': 'Server connection failed!',
    'MISSING_LIB': 'jQuery is undefined.',
    'BAD_RESPONSE': 'Bad response, Parser error',
    'INVALID_PHONE': 'Please enter a valid phone number. Example: 333-333-3333',
    'INVALID_PHONE_US': 'Please enter a valid phone number. Example: 333-333-3333',
    'INVALID_PHONE_FR': 'Veuillez spécifier un numéro de téléphone valide.',
    'INVALID_PHONE_UK': 'Must be 11 numbers and begin with a 0.',
    'INVALID_EMAIL': 'The email address is invalid.',
    'INVALID_CC_NUMBER': 'Invalid Credit Card Number',
    'INVALID_FIRSTNAME': 'Please enter a valid First name',
    'INVALID_LASTNAME': 'Please enter a valid Last name',
    'INVALID_CITY': 'Please enter a valid City',
    'INVALID_NAME': 'Please enter a valid Name',
    'INVALID_CVN': 'Invalid Security Code',
    'REMOVE': 'Remove',
    'QTY': 'Qty',
    'EMPTY_IMG_ALT': 'Remove',
    'COMPARE_BUTTON_LABEL': 'Compare Items',
    'COMPARE_CONFIRMATION': 'This will remove the first product added to compare.  Is that OK?',
    'COMPARE_REMOVE_FAIL': 'Unable to remove item from list',
    'COMPARE_ADD_FAIL': 'Unable to add item to list',
    'ADD_TO_CART_FAIL': 'Unable to add item \'{0}\' to cart ',
    'REGISTRY_SEARCH_ADVANCED_CLOSE': 'Close Advanced Search',
    'INVALID_MIN_CHARACTERS': 'You need to use at least {0} characters',
    'INVALID_INPUT': 'Please check your input.',
    'INVALID_ZIPCODE': 'Please provide a valid zipcode.',
    'PHONE_MIN_LENGTH': 'You need to use at least 10 characters',
    'GIFT_CERT_INVALID': 'Invalid Gift Certificate Code',
    'GIFT_CERT_BALANCE': 'Your current gift certificate balance is ',
    'GIFT_CERT_AMOUNT_INVALID': 'Gift Certificate can only be purchased with a minimum of $5 and maximum of $5000',
    'GIFT_CERT_MISSING': 'Please enter a gift certificate code.',
    'COUPON_CODE_MISSING': 'Please Enter a Promotion Code',
    'COOKIES_DISABLED': 'Your browser currently is not set to accept Cookies. Please turn it on or check if you have another program set to block cookies.',
    'BML_AGREE_TO_TERMS': 'You must agree to the terms and conditions',
    'CHAR_LIMIT_MSG': 'You have {0} characters left out of a {1} character limit.',
    'CONFIRM_DELETE': 'Do you want to remove this {0}?',
    'TITLE_GIFTREGISTRY': 'gift registry',
    'TITLE_ADDRESS': 'address',
    'TITLE_CREDITCARD': 'credit card',
    'SERVER_CONNECTION_ERROR': 'Server connection failed!',
    'IN_STOCK_DATE': 'The expected in-stock date is {0}.',
    'ADD_ADDRESS': 'Add Address',
    'EDIT_ADDRESS': 'Edit Address',
    'ADD_CREDIT_CARD': 'Add a Credit Card',
    'LOCALE': 'default',
    'MC_AJAX_ERROR': 'Sorry, we are unable to process your request at this time. We\'re hard at work and should have the problem solved shortly.',
    'PROCESSING_ORDER': 'Processing',
    'ACCORDION_TEXT_MORE': 'Read more',
    'ACCORDION_TEXT_LESS': 'Hide',
    'NO_SHIPPING_METHOD': 'No Shipping method found for the given address. Please update the address.',
    'FedEx_Ground': '05',
    'FedEx_ExpressSaver': '08',
    'FedEx_NextDay': '10',
    'CARDTYPE_MISSING': 'Please select a Card',
    'CARDNO_MISSING': 'Please enter the Number as it appears on your card',
    'CARDNO_INVALID': 'Invalid Credit Card Number',
    'MONTH_MISSING': 'Please select a Expiration Month',
    'YEAR_MISSING': 'Please select a Expiration Year',
    'YEAR_INVALID': 'This Credit Card is expired',
    'CVV_MISSING': 'Please enter your Security Code',
    'CVV_INVALID': 'Invalid Security Code',
    'IN_STOCK': 'In Stock',
    'QTY_IN_STOCK': '{0} Item(s) In Stock',
    'PREORDER': 'Pre-Order',
    'QTY_PREORDER': '{0} item(s) are available for pre-order.',
    'REMAIN_PREORDER': 'The remaining items are available for pre-order.',
    'BACKORDER': 'Back Order',
    'QTY_BACKORDER': 'Back Order {0} item(s)',
    'REMAIN_BACKORDER': 'The remaining items are available on back order.',
    'NOT_AVAILABLE': 'This item is currently not available online.',
    'REMAIN_NOT_AVAILABLE': 'The remaining items are currently not available. Please adjust the quantity.'
  };
  app.integrations = {
    'onepagecheckout': {
      'enabled': false,
      'url': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/onepagecheckout.js'
    },
    'homepagecheckout': {
      'url': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/homecheckout.js'
    },
    'BrightCovePolicyKey': {
      'policykey': null
    },
    'calculator': {
      'url': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/experience.js',
      'library': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/knockout-2.2.1.min.js'
    },
    'qas': {
      'enabled': true,
      'url': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/qas.js',
      'token': 'fd32e247-0c62-49e2-bad1-b7187f330f05'
    },
    'socialsharing': {
      'enabled': true
    },
    'localeSelector': {
      'enabled': false
    },
    'easy2': {
      'enabled': false,
      'sitecode': 'bionaire-com',
      'globalcode': 'bionaire-com'
    },
    'chileoverride': {
      'enabled': false,
      'url': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/chile.override.js'
    },
    'crowdtwist': {
      'enabled': false,
      'shareproduct': '/on/demandware.store/Sites-sharpie-Site/default/CrowdTwist-ShareProduct',
      'sharerecipe': '/on/demandware.store/Sites-sharpie-Site/default/CrowdTwist-ShareRecipe',
      'sharevideo': '/on/demandware.store/Sites-sharpie-Site/default/CrowdTwist-ShareVideo',
      'shareblog': '/on/demandware.store/Sites-sharpie-Site/default/CrowdTwist-ShareBlog',
      'loyaltyprogramname': null,
      'isloyaltymember': false,
      'hashtagcampaign': '#freshbucks'
    },
    'ordergroove': {
      'enabled': false
    },
    'quickview': {
      'enabled': false
    },
    'stickyAddToCart': {
      'enabled': true
    },
    'ecommerceEnabled': {
      'enabled': false
    },
    'searchsuggestions': {
      'enabled': false
    },
    'recipeReviews': {
      'userSubmittedReviewsEnabled': false
    },
    'crocktoberRecipeDetails': {
      'recipesJSON': ''
    },
    'marketingCloud': {
      'getCurrent': 'Sharpie',
      'enabled': true,
      'contentTimeout': null,
      'emailOptInDefaultConsentValue': false,
      'urls': {
        'emailSignupAsync': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-EmailSignupAsync',
        'welcomeModal': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-WelcomeModal',
        'customContent': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-CustomContent',
        'getPIareas': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetPIAreas',
        'getUpsells': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetUpsells',
        'piJson': null,
        'piBlogJson': null,
        'piCartJson': null,
        'piCatLandingJson': null,
        'piCatGridJson': null,
        'piOrderThanksJson': null,
        'piPDPJson': null,
        'piRecipeJson': null,
        'upsellsJson': null,
        'piHomePageContentJson': null,
        'piHeaderContentJson': null,
        'getPIContent': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetPIContent',
        'getPIHomepage': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetPIHomepageContent',
        'getFallback': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetFallbackContentAsset',
        'getContent': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-GetContent',
        'logSFMCError': '/on/demandware.store/Sites-sharpie-Site/default/MCGateway-MCLogger'
      }
    }
  };
  app.urls = {
    'appResources': '/on/demandware.store/Sites-sharpie-Site/default/Resources-Load',
    'pageInclude': '/on/demandware.store/Sites-sharpie-Site/default/Page-Include',
    'pageShow': '/on/demandware.store/Sites-sharpie-Site/default/Page-Show',
    'addGiftCert': '/giftcertpurchase',
    'minicartGC': '/on/demandware.store/Sites-sharpie-Site/default/GiftCert-ShowMiniCart',
    'addProduct': '/on/demandware.store/Sites-sharpie-Site/default/Cart-AddProduct',
    'homepageCheckoutMultipay': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COHomepage-HandleMultiPayment',
    'homepageAddEcoFee': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COHomepage-AddEcoFee',
    'calculateTax': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Cart-CalculateTax',
    'homepageCheckoutUpdateQty': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COHomepage-UpdateItemQty',
    'onepageCheckout': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/OnepageCheckout-Start',
    'onepageCheckoutMultipay': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/OnepageCheckout-HandleMultiPayment',
    'onepageCheckoutUpdateQty': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/OnepageCheckout-UpdateItemQty',
    'addUpsell': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/OnepageCheckout-AddFinalUpsell',
    'minicart': '/on/demandware.store/Sites-sharpie-Site/default/Cart-MiniAddProduct',
    'cartShow': 'https://www.sharpie.com/cart',
    'updateInitialPayment': '/on/demandware.store/Sites-sharpie-Site/default/Cart-UpdateInitialPayment',
    'giftRegAdd': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Address-GetAddressDetails?addressID=',
    'paymentsList': 'https://www.sharpie.com/paymentsettings',
    'addressesList': 'https://www.sharpie.com/addresslist',
    'wishlistAddress': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Wishlist-SetShippingAddress',
    'wishlistShow': 'https://www.sharpie.com/wishlist',
    'deleteAddress': '/on/demandware.store/Sites-sharpie-Site/default/Address-Delete',
    'getProductUrl': '/on/demandware.store/Sites-sharpie-Site/default/Product-Show',
    'getBonusProducts': '/on/demandware.store/Sites-sharpie-Site/default/Product-GetBonusProducts',
    'addBonusProduct': '/on/demandware.store/Sites-sharpie-Site/default/Cart-AddBonusProduct',
    'getSetItem': '/on/demandware.store/Sites-sharpie-Site/default/Product-GetSetItem',
    'productDetail': '/on/demandware.store/Sites-sharpie-Site/default/Product-Detail',
    'getAvailability': '/on/demandware.store/Sites-sharpie-Site/default/Product-GetAvailability',
    'searchsuggest': '/on/demandware.store/Sites-sharpie-Site/default/Search-GetSuggestions',
    'productNav': '/on/demandware.store/Sites-sharpie-Site/default/Product-Productnav',
    'summaryRefreshURL': '/on/demandware.store/Sites-sharpie-Site/default/COBilling-UpdateSummary',
    'billingSelectCC': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COBilling-SelectCreditCard',
    'updateAddressDetails': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COShipping-UpdateAddressDetails',
    'updateAddressDetailsBilling': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COBilling-UpdateAddressDetails',
    'shippingMethodsJSON': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COShipping-GetApplicableShippingMethodsJSON',
    'getShippingMethodsJSON': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/ShippingRateCalculation-GetJson',
    'shippingMethodsList': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COShipping-UpdateShippingMethodList',
    'selectShippingMethodsList': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COShipping-SelectShippingMethod',
    'resetPaymentForms': '/on/demandware.store/Sites-sharpie-Site/default/COBilling-ResetPaymentForms',
    'compareShow': '/compare',
    'compareAdd': '/on/demandware.store/Sites-sharpie-Site/default/Compare-AddProduct',
    'compareRemove': '/on/demandware.store/Sites-sharpie-Site/default/Compare-RemoveProduct',
    'giftCardCheckBalance': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COBilling-GetGiftCertificateBalance',
    'addCoupon': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Cart-AddCoupon',
    'assignCustomerGroup': '/on/demandware.store/Sites-sharpie-Site/default/Responsive-AssignMobileCustomerGroup',
    'isMobileCustomerGroup': '/on/demandware.store/Sites-sharpie-Site/default/Responsive-IsMobileCustomerGroup',
    'loadDynamicContentSlot': '/on/demandware.store/Sites-sharpie-Site/default/Responsive-LoadDynamicContentSlot',
    'loadDynamicContentAsset': '/on/demandware.store/Sites-sharpie-Site/default/Responsive-LoadDynamicContentAsset',
    'emailSignUp': '/on/demandware.store/Sites-sharpie-Site/default/ltkEmailSignup-Standard',
    'checkUserName': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Account-CheckUserNameLive',
    'giftMessageEdit': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/COShipping-giftMessageEdit',
    'getProductCustomerService': '/on/demandware.store/Sites-sharpie-Site/default/Warranty-ProductList',
    'continueUrl': 'http://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/Resources-Load/C799705604',
    'staticPath': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/',
    'absolutePath': 'http://www.sharpie.com/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/',
    'removeImg': '/on/demandware.static/Sites-sharpie-Site/-/default/dwe7095cfc/images/interface/icon_remove.gif',
    'compareEmptyImage': '/on/demandware.static/Sites-sharpie-Site/-/default/dw2432207a/images/comparewidgetempty.png',
    'sliderScript': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/slider/jquery.plusslider-min.js',
    'zoomScript': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/elevatezoom/jquery.elevateZoom-2.5.5.min.js',
    'imagesLoaded': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/imagesloaded/imagesloaded.pkgd.min.js',
    'customScrollbar': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/custom-scrollBar/jquery.scroll.min.js',
    'hashChange': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/hashchange/jquery.ba-hashchange.min.js',
    'jCarousel': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/jcarousel/jquery.jcarousel.min.js',
    'lazyLoad': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/lazysizes.min.js',
    'QASscript': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/js/qas.js',
    'respondjs': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/respond.min.js',
    'loadLocaleSelector': '/on/demandware.store/Sites-sharpie-Site/default/Home-LoadLocaleSelector',
    'masonry': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/masonry.pkgd.min.js',
    'datePickerLocale': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/ui/datepicker/datepicker-locale.js',
    'slidesjs': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery.slides.min.js',
    'loadWebReasonForm': '/on/demandware.store/Sites-sharpie-Site/default/SalesForce-LoadWebReasonForm',
    'bxSlider': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/bxslider/jquery.bxslider.min.js',
    'setPaymentMethod': '/on/demandware.store/Sites-sharpie-Site/default/PayU-setPaymentMethod',
    'createInitialOrder': 'https://www.sharpie.com/on/demandware.store/Sites-sharpie-Site/default/PayU-CreateInitialOrder',
    'updatePayUForm': '/on/demandware.store/Sites-sharpie-Site/default/PayU-updatePayUForm',
    'socialSliderScript': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/jcarousel/jquery.carousellite.js',
    'slickSlider': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/lib/jquery/slick/slick.min.js',
    'getRecipeOfTheDay': '/on/demandware.store/Sites-sharpie-Site/default/CrockpotRecipes-CrocktoberRecipeShow',
    'smallLockImg': '/on/demandware.static/Sites-sharpie-Site/-/default/v1528801845266/images/crocktober/small-lock.png'
  };
  app.currentLocale = 'default';
  app.deviceType = 'desktop';
  app.loggedIn = false;
}(window.app = window.app || {
}));
