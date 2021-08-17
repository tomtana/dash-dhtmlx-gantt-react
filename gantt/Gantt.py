# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Gantt(Component):
    """A Gantt component.


Keyword arguments:

- id (string; default "dash-dhtmlx-gantt"):
    The ID used to identify this component in Dash callbacks.

- data (dict; default {    data: [        { id: 1, text: 'Task #1', start_date: '2020-02-12', duration: 3, progress: 0.6 },        { id: 2, text: 'Task #2', start_date: '2020-02-16', duration: 3, progress: 0.4 }    ],    links: [        { id: 1, source: 1, target: 2, type: '0' }    ]})

    `data` is a dict with keys:

    - data (list; optional)

    - links (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data']
        self._type = 'Gantt'
        self._namespace = 'gantt'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Gantt, self).__init__(**args)
