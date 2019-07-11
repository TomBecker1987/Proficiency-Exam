
$("button").on("click",function(){
    let input = $(this).closest("div").find("input").val()
    $(this).closest("div").find("input").val('')
    $.get(`/recipes/${input}`, function(response){
        console.log(response)
    })
})