# AUTO GENERATED FILE - DO NOT EDIT

export gantt

"""
    gantt(;kwargs...)

A Gantt component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `data` (optional): . data has the following type: lists containing elements 'data', 'links'.
Those elements have the following types:
  - `data` (Array; optional)
  - `links` (Array; optional)
"""
function gantt(; kwargs...)
        available_props = Symbol[:id, :data]
        wild_props = Symbol[]
        return Component("gantt", "Gantt", "gantt", available_props, wild_props; kwargs...)
end

