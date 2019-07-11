class Renderer {
    render(data){
        $("#display-food").empty()
        let source = $("#render-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template(data)
        $("#display-food").append(newHTML)
    }
}
