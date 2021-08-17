# AUTO GENERATED FILE - DO NOT EDIT

gantt <- function(id=NULL, data=NULL) {
    
    props <- list(id=id, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Gantt',
        namespace = 'gantt',
        propNames = c('id', 'data'),
        package = 'gantt'
        )

    structure(component, class = c('dash_component', 'list'))
}
