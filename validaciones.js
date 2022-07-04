function obtenerDatos()  {
    $.ajax('https://62b7c0fbf4cb8d63df54c235.mockapi.io/receta'),{
        success: function (data, status, xhr) {
            for (var indice=0;indice<data.length;indice++) {
                var receta = data[indice].receta
                var avatar = data[indice].avatar
                var precio = data[indice].precio
                var filaTAbla = '<tr>'
                                +  '<td class="prc-25"'+receta+'</td>'
                                +   '<td class="prc-25"><img src="https://comidasparaguayas.com/wp-content/uploads/2019/11/empanada-de-carne-paraguaya_700x465.jpg"'+avatar+'" alt="" style="width: 131px"></td>'
                                +   '<td class="prc-25">'+precio+'</td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tablaempanada").append(filaTAbla)                
            }
        }
    }
}