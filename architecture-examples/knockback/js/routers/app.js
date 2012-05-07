(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.AppRouter = (function() {
    __extends(AppRouter, Backbone.Router);
    function AppRouter() {
      AppRouter.__super__.constructor.apply(this, arguments);
    }
    AppRouter.prototype.routes = {
      "": "all",
      "active": "active",
      "completed": "completed"
    };
    AppRouter.prototype.all = function() {
      return app.viewmodels.settings.list_filter_mode('');
    };
    AppRouter.prototype.active = function() {
      return app.viewmodels.settings.list_filter_mode('active');
    };
    AppRouter.prototype.completed = function() {
      return app.viewmodels.settings.list_filter_mode('completed');
    };
    return AppRouter;
  })();
}).call(this);
