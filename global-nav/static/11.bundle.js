(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{402:function(e,t,i){"use strict";i.r(t);i(163),i(164);function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var a=function(){function e(t){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$el=t,this.header=document.querySelector(".global-header"),this.hamburger=this.$el.querySelector(".primary-nav__hamburger button"),this.navContainer=this.$el.querySelector(".primary-nav__menu-container"),this.primaryNav=this.$el.querySelector(".primary-nav__menu"),this.utilityNav=this.$el.querySelector(".utility-nav"),this.subMenus=this.$el.querySelectorAll(".primary-nav__subitems"),this.toggleSubMenuBtns=this.$el.querySelectorAll(".primary-nav__link-toggle"),this.backBtns=this.$el.querySelectorAll(".primary-nav__back"),this.navOpen=!1,this.searchTrigger=this.$el.querySelector(".primary-nav__search-button"),this.searchForm=this.$el.querySelector(".primary-nav__search"),this.searchOpen=!1,this.hamburger.addEventListener("click",(function(){i.navOpen?(i.closeNav(),i.isMobileDevice()||i.unsetHeight()):i.openNav()})),this.searchTrigger.addEventListener("click",(function(){i.searchOpen?i.closeSearch():i.openSearch()})),this.toggleSubMenuBtns.forEach((function(e){e.addEventListener("click",(function(){i.toggleSubMenu(e)}))})),this.backBtns.forEach((function(e){e.addEventListener("click",(function(){i.utilityNav.classList.remove("visually-hidden"),i.backToMainMenu(e)}))}))}var t,i,a;return t=e,(i=[{key:"openNav",value:function(){if(this.searchOpen&&(this.searchOpen=!1,this.closeSearch(),this.unsetHeight()),this.navOpen=!0,this.header.classList.add("nav-open"),this.hamburger.classList.add("open"),this.hamburger.setAttribute("aria-expanded",!0),this.navContainer.classList.add("show"),this.navContainer.setAttribute("aria-hidden",!1),!this.isMobileDevice()){var e=this.utilityNav.getBoundingClientRect().height+this.primaryNav.getBoundingClientRect().height;this.setHeight(e)}}},{key:"closeNav",value:function(){this.navOpen=!1,this.header.classList.remove("nav-open"),this.hamburger.classList.remove("open"),this.hamburger.setAttribute("aria-expanded",!1),this.navContainer.classList.remove("show"),this.navContainer.setAttribute("aria-hidden",!0)}},{key:"openSearch",value:function(){this.navOpen&&(this.navOpen=!1,this.closeNav()),this.searchOpen=!0,this.header.classList.add("search-open"),this.searchTrigger.classList.add("search-open"),this.searchTrigger.setAttribute("aria-expanded",!0),this.searchForm.classList.add("show"),this.searchForm.setAttribute("aria-hidden",!1)}},{key:"closeSearch",value:function(){this.searchOpen=!1,this.header.classList.remove("search-open"),this.searchTrigger.classList.remove("search-open"),this.searchTrigger.setAttribute("aria-expanded",!1),this.searchForm.classList.remove("show"),this.searchForm.setAttribute("aria-hidden",!0)}},{key:"setHeight",value:function(e,t){var i,s=window.innerHeight;s-46<e?(this.navContainer.classList.add("set-overflow"),i=s-46):(this.navContainer.classList.remove("set-overflow"),i=e),t&&e>s-46&&(this.navContainer.classList.remove("set-overflow"),t.style.height="100%",t.style.overflow="auto"),this.navContainer.style.height="".concat(i,"px")}},{key:"unsetHeight",value:function(){this.subMenus.forEach((function(e){e.classList.add("visually-hidden"),e.setAttribute("aria-hidden",!0),e.parentNode.querySelector("button").removeAttribute("aria-expanded")})),this.navContainer.removeAttribute("style")}},{key:"toggleSubMenu",value:function(e){var t=e.parentNode.querySelector(".primary-nav__subitems");e.setAttribute("aria-expanded",!0),this.utilityNav.classList.add("visually-hidden"),t.classList.remove("visually-hidden"),t.setAttribute("aria-hidden",!1),this.isMobileDevice()||this.setHeight(t.getBoundingClientRect().height,t)}},{key:"backToMainMenu",value:function(e){var t=e.parentNode,i=this.primaryNav.getBoundingClientRect().height+this.utilityNav.getBoundingClientRect().height;e.removeAttribute("aria-expanded"),t.classList.add("visually-hidden"),t.setAttribute("aria-hidden",!0),this.isMobileDevice()||this.setHeight(i)}},{key:"isMobileDevice",value:function(){return"ontouchstart"in window}}])&&s(t.prototype,i),a&&s(t,a),e}();t.default=a}}]);