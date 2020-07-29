using System.Web;
using System.Web.Optimization;

namespace WebAspNetAngularApp
{
    public class BundleConfig
    {
        // Pour plus d'informations sur le regroupement, visitez https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilisez la version de développement de Modernizr pour le développement et l'apprentissage. Puis, une fois
            // prêt pour la production, utilisez l'outil de génération à l'adresse https://modernizr.com pour sélectionner uniquement les tests dont vous avez besoin.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/styles/bootstrap.css",
                      "~/Content/styles/site.css"));

            /*bundles.Add(new StyleBundle("~/Bootstrap").Include(
                      "~/Content/node_modules/bootstrap/dist/css/bootstrap.min.css",
                      "~/Content/node_modules/bootstrap/dist/js/bootstrap.min.js"));

            bundles.Add(new StyleBundle("~/JQuery").Include(
                      "~/Content/node_modules/jquery/dist/jquery.min.js"));

            bundles.Add(new StyleBundle("~/Popper.js").Include(
                      "~/Content/node_modules/popper.js/dist/popper.min.js"));*/

            // Angular bundles
            /*bundles.Add(new ScriptBundle("~/bundles/Angular")
              .Include(
                "~/Scripts/ngWebApp/runtime-es2015.js",
                "~/Scripts/ngWebApp/runtime-es5.js",
                "~/Scripts/ngWebApp/polyfills-es2015.js",
                "~/Scripts/ngWebApp/polyfills-es5.js",
                "~/Scripts/ngWebApp/styles-es2015.js",
                "~/Scripts/ngWebApp/styles-es5.js",
                "~/Scripts/ngWebApp/vendor-es2015.js",
                "~/Scripts/ngWebApp/vendor-es5.js",
                "~/Scripts/ngWebApp/main-es2015.js",
                "~/Scripts/ngWebApp/main-es5.js"));*/

            bundles.Add(new ScriptBundle("~/bundles/ngApp-runtime").Include(
                      "~/Scripts/ngWebApp/runtime*"));

            bundles.Add(new ScriptBundle("~/bundles/ngApp-polyfills").Include(
                      "~/Scripts/ngWebApp/polyfills*"));

            bundles.Add(new ScriptBundle("~/bundles/ngApp-scripts").Include(
                      "~/Scripts/ngWebApp/scripts*"));

            bundles.Add(new StyleBundle("~/Content/ngApp-styles").Include(
                      "~/Scripts/ngWebApp/styles*"));

            bundles.Add(new ScriptBundle("~/bundles/ngApp-vendor").Include(
                      "~/Scripts/ngWebApp/vendor*"));

            bundles.Add(new ScriptBundle("~/bundles/ngApp-main").Include(
                      "~/Scripts/ngWebApp/main*"));

            /*bundles.Add(new ScriptBundle("~/bundles/Angular").Include(
                "~/Scripts/ngWebApp/runtime*",
                "~/Scripts/ngWebApp/polyfills*",
                "~/Scripts/ngWebApp/styles*",
                "~/Scripts/ngWebApp/vendor*",
                "~/Scripts/ngWebApp/main*"));*/

            /*bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/ngWebApp/runtime*")
                .Include("~/Scripts/ngWebApp/polyfills*")
                .Include("~/Scripts/ngWebApp/styles*")
                .Include("~/Scripts/ngWebApp/vendor*")
                .Include("~/Scripts/ngWebApp/main*"));*/
        }
    }
}
