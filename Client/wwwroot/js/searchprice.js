
    function disableSelection(e){if(typeof e.onselectstart!="undefined")e.onselectstart=function(){return false};else if(typeof e.style.MozUserSelect!="undefined")e.style.MozUserSelect="none";else e.onmousedown=function(){return false};e.style.cursor="default"}window.onload=function(){disableSelection(document.body)}
    //< !--a code to protect content from right click-- >
        function mousedwn(e) { try { if (event.button == 2 || event.button == 3) return false } catch (e) { if (e.which == 3) return false } };document.oncontextmenu=function(){return false};document.ondragstart=function(){return false};document.onmousedown=mousedwn
 //<!--a code to protect shorcut keyboard, view source etc-- > 
    window.addEventListener("keydown",function(e){if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){e.preventDefault()}});document.keypress=function(e){if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){}return false}
 //<!--a code to protect your articles-- > 
    document.onkeydown=function(e){e = e || window.event;if(e.keyCode==123||e.keyCode==18){return false}}
    //< script type = "text/javascript" >
        function myFunction() {
            // Declare variables
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");

            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

//</script >


    //<script type="text/javascript">
        var $ = function (id) {
	    return document.getElementById(id); //this is shortcut function for getElementbyId to follow
	}

	window.onload = function () {
            $("clear").onclick = clear_click;
	    $("myInput").focus();
	}
 //location.reload();
 var clear_click = function () {
            $("myInput").value = ("");

 // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
     for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        txtValue = td.textContent || td.innerText;
        tr[i].style.display = "";
      /*if (txtValue.toUpperCase().indexOf(filter) > -1) {*/
      /*} else {
            tr[i].style.display = "none";*/
      /*}*/
    }
  }
//window.location.reload();
}

//</script>	