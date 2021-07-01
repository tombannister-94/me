from pathlib import Path

from django.conf import settings
from django.views.generic import TemplateView
from django_distill import distill_path


# Views
class DefaultView(TemplateView):
    def get_template_names(self):
        template = self.kwargs.get("template_name")

        if not template:
            template = "index.html"

        return [template]


# URLs
def get_static():
    """ We don't need to return anything as we're just rendering a single file """
    settings.STATIC_URL = 'static/'  # Set a relative URL when this is rendered by distill

    return None


def get_templates():
    """ Return a list of all the templates we want to render """
    settings.STATIC_URL = 'static/'  # Set a relative URL when this is rendered by distill

    templates_dir = Path(__file__).resolve().parents[1] / "templates"

    for f in templates_dir.glob("*.html"):
        if not f.name.startswith("_"):
            yield {"template_name": f.name}


urlpatterns = [
    distill_path("", DefaultView.as_view(), name="index", distill_func=get_static),
    distill_path("<str:template_name>", DefaultView.as_view(), name="default", distill_func=get_templates),
]
