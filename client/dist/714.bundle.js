"use strict";(self.webpackChunkproject_atelier=self.webpackChunkproject_atelier||[]).push([[714],{7714:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(5671),a=r(3144),o=r(7326),i=r(9340),c=r(2963),s=r(1120),l=r(7294),u=r(9669),d=r.n(u);const p=function(e){return l.createElement("div",{className:"overview_thumbnail",onClick:function(){e.changePic(e.img)}},l.createElement("div",{className:"overview_thumbnail_img",style:{backgroundImage:"url('"+e.img+"')"}}))},f=function(e){return l.createElement("div",{id:"overview_thumbnails","data-testid":"thumbnails"},l.createElement("div",{className:"overview_thumb_scroll overview_thumb_scroll_up"}),e.thumbnails.map((function(t){return l.createElement(p,{key:Math.random(),img:t.thumbnail_url,changePic:e.changePic})})),l.createElement("div",{className:"overview_thumb_scroll overview_thumb_scroll_down"}))};const m=function(e){(0,i.Z)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,n.Z)(this,d),(t=u.call(this,e)).state={heroPic:"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",thumbnailCount:0,currentImg:0},t.changeHeroPic=t.changeHeroPic.bind((0,o.Z)(t)),t.nextImage=t.nextImage.bind((0,o.Z)(t)),t.prevImage=t.prevImage.bind((0,o.Z)(t)),t.changeThumbnail=t.changeThumbnail.bind((0,o.Z)(t)),t}return(0,a.Z)(d,[{key:"changeHeroPic",value:function(e){this.setState({heroPic:e})}},{key:"changeThumbnail",value:function(e){this.setState({currentImg:e})}},{key:"nextImage",value:function(){console.log("props: ",this.props);var e=this.state.currentImg;e++,this.setState({currentImg:e})}},{key:"prevImage",value:function(){console.log("state: ",this.state)}},{key:"expandGallery",value:function(){var e=document.querySelector("#gallery_expander");e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")}},{key:"render",value:function(){var e={backgroundImage:"url('"+this.state.heroPic+"')"},t=[];try{t=this.props.productStyle[this.props.currentStyleID].photos}catch(e){}return l.createElement("div",{id:"overview_image_gallery","data-testid":"image-gallery"},l.createElement("div",{id:"gallery_expander"},l.createElement(f,{thumbnails:t,changePic:this.changeHeroPic,changeThumbnail:this.changeThumbnail}),l.createElement("div",{className:"overview_hero_nav overview_hero_nav_prev",onClick:this.prevImage}),l.createElement("div",{id:"heroPic",style:e}),l.createElement("div",{className:"overview_hero_nav overview_hero_nav_next",onClick:this.nextImage}),l.createElement("div",{id:"overview_fullscreen_toggle",onClick:this.expandGallery},l.createElement("div",{className:"toggle-icon"}))))}}]),d}(l.Component);var h=r(8636);const y=function(e){return l.createElement("div",{id:"overview_star_rating","data-testid":"star-rating"},l.createElement(h.Z,{stars:e.stars}),l.createElement("div",{className:"go-to-reviews",onClick:function(){document.querySelector(".review-grid").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},"Read all reviews"))},v=function(e){var t="Condiments",r="Heinz Tomato Ketchup",n="$5.99";try{t=e.productInfo.category,r=e.productInfo.name,n=e.productInfo.default_price}catch(e){console.log("please try again later...")}return l.createElement("div",{id:"overview_product_headline","data-testid":"product-headline"},l.createElement("h3",null,t),l.createElement("h2",null,r),l.createElement("h3",null,n))},g=function(e){return l.createElement("div",{id:"overview_all_styles","data-testid":"styles"},e.allStyles.map((function(t,r){return e.currentStyleID===r?l.createElement("div",{key:Math.random(),className:"overview_style overview_selected_style"},l.createElement("img",{src:t.photos[0].thumbnail_url,alt:t.name,onClick:function(){e.updateStyles(r,e.allStyles)}})):l.createElement("div",{key:Math.random(),className:"overview_style"},l.createElement("img",{src:t.photos[0].thumbnail_url,alt:t.name,onClick:function(){e.updateStyles(r,e.allStyles)}}))})))},S=function(e){var t=[],r=[1];try{for(var n=e.currentStyleInfo.skus,a=0,o=Object.keys(e.currentStyleInfo.skus);a<o.length;a++){var i=o[a];t.push(n[i])}r=[];for(var c=1;c<=e.maxQty;c++)c<=15&&r.push(c)}catch(e){}return l.createElement("div",{id:"overview_select_size","data-testid":"select-size"},l.createElement("select",{className:"size-dropdown",onChange:e.updateSize},l.createElement("option",{value:""},"Select Size"),t.map((function(e){var t=JSON.stringify(e);return l.createElement("option",{key:t,value:t},e.size)}))),l.createElement("select",{className:"qty-dropdown",onChange:e.updateQty},r.map((function(e){return l.createElement("option",{key:e,value:e},e)}))))};const b=function(e){(0,i.Z)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,n.Z)(this,d),(t=u.call(this,e)).state={styles:[{name:"Ketchup",photos:[{thumbnail_url:"https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg",url:"https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg"}]}]},t.updateStyles=t.updateStyles.bind((0,o.Z)(t)),t}return(0,a.Z)(d,[{key:"updateStyles",value:function(e,t){this.props.changeStyle(e),void 0!==t&&this.setState({styles:t})}},{key:"render",value:function(){var e=this.state.styles,t=this.state.styles[0].name;try{t=this.props.productStyle[this.props.currentStyleID].name,e=this.props.productStyle}catch(e){}return l.createElement("div",{id:"overview_style_selector","data-testid":"style-selector"},l.createElement("h3",null,"Style > ",t),l.createElement(g,{allStyles:e,currentStyleID:this.props.currentStyleID,updateStyles:this.updateStyles}),l.createElement(S,{currentStyleInfo:e[this.props.currentStyleID],quantityAvailable:this.state.quantityAvailable,updateSize:this.props.updateSize,updateQty:this.props.updateQty,maxQty:this.props.maxQty}))}}]),d}(l.Component),E=function(e){var t=function(){var t=document.querySelector("#overview_favorite");t.classList.contains("selected")?(t.classList.remove("selected"),e.removeOutfit(e.productID)):(t.classList.add("selected"),e.addOutfit())},r=l.createElement("div",{id:"overview_favorite",onClick:t},l.createElement("i",{className:"fa fa-star",aria:"hidden"})),n=window.localStorage.AtelierOutfits;return n&&Object.keys(JSON.parse(n)).includes(String(e.productID))&&(r=l.createElement("div",{id:"overview_favorite",className:"selected",onClick:t},l.createElement("i",{className:"fa fa-star",aria:"hidden"}))),l.createElement("div",{id:"overview_add_cart","data-testid":"add-to-cart"},l.createElement("button",{onClick:e.addToCart},"Add to Cart",l.createElement("span",null,"+")),r)};const _=function(e){(0,i.Z)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,n.Z)(this,d),(t=u.call(this,e)).state={size:"",qty:1,maxQty:1},t.updateSize=t.updateSize.bind((0,o.Z)(t)),t.updateQty=t.updateQty.bind((0,o.Z)(t)),t.addToCart=t.addToCart.bind((0,o.Z)(t)),t}return(0,a.Z)(d,[{key:"updateSize",value:function(e){e=JSON.parse(e.target.value),console.log("chose a size!",e),this.setState({size:e.size,maxQty:e.quantity})}},{key:"updateQty",value:function(e){this.setState({qty:parseInt(e.target.value)}),console.log(this.state)}},{key:"addToCart",value:function(){var e={productID:this.props.productInfo.id,styleID:this.props.currentStyleID,size:this.state.size,qty:this.state.qty},t=window.localStorage.AtelierCart;t?(t=JSON.parse(t))[Object.keys(t).length]=e:t={0:e},window.localStorage.setItem("AtelierCart",JSON.stringify(t)),console.log("added to cart!")}},{key:"render",value:function(){return l.createElement("div",{id:"overview_product_options","data-testid":"product-options"},l.createElement(y,{stars:this.props.stars}),l.createElement(v,{productInfo:this.props.productInfo,currentStyleID:this.props.currentStyleID}),l.createElement(b,{productStyle:this.props.productStyle,currentStyleID:this.props.currentStyleID,changeStyle:this.props.changeStyle,maxQty:this.state.maxQty,updateSize:this.updateSize,updateQty:this.updateQty}),l.createElement(E,{productID:this.props.productInfo.id,addOutfit:this.props.addoutfit,removeOutfit:this.props.removeoutfit,addToCart:this.addToCart}))}}]),d}(l.Component),I=function(e){var t="America's Favorite Ketchup. Yeah, it's that important.",r='First introduced as "Catsup" in 1876 in Pittsburgh, Pennsylvania, Heinz Tomato Ketchup remains the best-selling brand of ketchup, and is used as a condiment for many foods, such as french fries, chips, hamburgers and hot dogs.';try{t=e.productInfo.slogan,r=e.productInfo.description}catch(e){}return l.createElement("div",{id:"overview_product_info","data-testid":"product-info"},l.createElement("div",null,l.createElement("h3",null,t),l.createElement("p",null,r)))};var w=r(2982);const k=function(e){var t=["test","test","test"];try{t=(0,w.Z)(e.productInfo.features)}catch(e){}return l.createElement("div",{id:"overview_product_bullets","data-testid":"product-bullets"},l.createElement("div",null,l.createElement("ul",null,t.map((function(e){return l.createElement("li",{key:Math.random()},e.feature)})))))};const Z=function(e){(0,i.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function p(e){var t;return(0,n.Z)(this,p),(t=u.call(this,e)).state={currentStyleID:0},t.changeStyle=t.changeStyle.bind((0,o.Z)(t)),t}return(0,a.Z)(p,[{key:"getProductInfo",value:function(e){console.log("Getting product:",e),d().get("/product/info/"+e).then((function(e){console.log(e.data.prod)})).catch((function(e){console.log("Error fetching Overview data!"),console.log(e)}))}},{key:"updateHero",value:function(){document.querySelector("#overview_thumbnails").children[1].click()}},{key:"changeStyle",value:function(e){var t=this;console.log("style changed: ",this.props),this.setState({currentStyleID:e},(function(){t.updateHero()}))}},{key:"render",value:function(){return l.createElement("div",{id:"overview","data-testid":"overview"},l.createElement(m,{productStyle:this.props.productStyle,currentStyleID:this.state.currentStyleID}),l.createElement(_,{productInfo:this.props.productInfo,productStyle:this.props.productStyle,currentStyleID:this.state.currentStyleID,stars:this.props.stars,changeStyle:this.changeStyle,addoutfit:this.props.addoutfit,removeoutfit:this.props.removeoutfit}),l.createElement(I,{productInfo:this.props.productInfo,currentStyleID:this.state.currentStyleID}),l.createElement(k,{productInfo:this.props.productInfo,currentStyleID:this.state.currentStyleID}))}},{key:"componentDidMount",value:function(){}}]),p}(l.Component)},8636:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(885),a=r(7294);const o=function(e){var t=e.rating,r=e.stars,o=(0,a.useState)(),i=(0,n.Z)(o,2),c=i[0],s=i[1];return(0,a.useEffect)((function(){!function(){if(r){var e=function(e){var t=0,r=0;if(e)for(var n=Object.keys(e),a=Object.values(e),o=0;o<n.length;o++)t+=parseInt(a[o]),r+=parseInt(n[o])*parseInt(a[o]);return t>0?(r/t).toFixed(1):0}(r.ratings);s(e)}t&&s(t)}()}),[r]),a.createElement("div",null,c>0?a.createElement("div",{className:"star",style:{"--rating":c}},a.createElement("i",{className:"fa fa-star"}),a.createElement("i",{className:"fa fa-star"}),a.createElement("i",{className:"fa fa-star"}),a.createElement("i",{className:"fa fa-star"}),a.createElement("i",{className:"fa fa-star"})):null)}},7326:(e,t,r)=>{function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},5671:(e,t,r)=>{function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>n})},3144:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,{Z:()=>a})},1120:(e,t,r)=>{function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:()=>n})},9340:(e,t,r)=>{function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,{Z:()=>a})},2963:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(1002),a=r(7326);function o(e,t){if(t&&("object"===(0,n.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(e)}},2982:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(907),a=r(181);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1002:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})}}]);