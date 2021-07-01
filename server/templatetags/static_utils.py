from django import template

register = template.Library()


@register.simple_tag
def define(val=None):
    """
    Allow storing of variables in templates via 'as' keyword
    """
    return val


@register.simple_tag
def define_list(*args):
    """
    Return a list comprised of all this tags arguments
    """
    return [*args]
