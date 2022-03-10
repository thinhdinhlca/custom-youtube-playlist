// https://www.chartjs.org/
window.function = function(data, first_id) {

    // data
    data = data.value ?? "";
    first_id = first_id.value ?? "";

    let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
  </head>
  <body>
  <div class="vid-main-wrapper clearfix">

  		    <!-- THE YOUTUBE PLAYER -->
      <div class="vid-container">
          <iframe id="vid_frame" src="https://www.youtube.com/embed/${first_id}?rel=0&showinfo=0&autohide=1" frameborder="0""></iframe>
      </div>

      <!-- THE PLAYLIST -->
      <div class="vid-list-container">
            <ol id="vid-list">
              ${data}
              
            </ul>
       </div>

  	
</div>
<style>
body {
  			margin: 0px;
  			padding: 0;
  			background: transparent;
  			font-family: Arial, Helvetica, sans-serif;
        width: 100vw;
        height: 100vh;
  		}

  		.title {
  			width: 70%;
  			margin: 0 auto;
  		}

      #vid-list .desc {
        display: -webkit-box;
        font-size: 11px !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; 
        overflow: hidden;
      }

  		.caption {
  			width: 70%;
  			max-width: 854px;
  			margin: 0 auto;
  			padding: 20px 0;
  		}

  		.vid-main-wrapper {
  			width: 100vw;
  			height: 100vh;
  			background: #fff;
  			margin: 0 auto;
  		}


  		/*  VIDEO PLAYER CONTAINER
 		############################### */
  		.vid-container {
		    position: relative;
		    padding-bottom: 52%;
		    padding-top: 30px; 
		    height: 0; 
        width:70%;
        float:left;
		}
		 
		.vid-container iframe,
		.vid-container object,
		.vid-container embed {
		    position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    min-height: 360px;
		}


		/*  VIDEOS PLAYLIST 
 		############################### */
		.vid-list-container {
			width: 30%;
      height:360px;
			overflow: hidden;
      float:right;
		}

    .vid-list-container:hover, .vid-list-container:focus {
       overflow-y: auto;
     }

		ol#vid-list {
      margin:0;
      padding:0;
      background: #222;
		}

    ol#vid-list li {
		  list-style: none;
    }

    ol#vid-list li a {
      text-decoration: none;
      background-color: #222;
      height:55px;
      display:block;
      padding:10px;
    }

    ol#vid-list li a:hover {
      background-color:#666666
    }

		.vid-thumb {
      float:left;
			margin-right: 8px;
		}

    .active-vid { 
      background:#3A3A3A;
    }

		#vid-list .desc {
			color: #CACACA;
			font-size: 13px;
			margin-top:5px;
		}


		@media (max-width: 624px) {
			body {
				margin: 15px;
			}
			.caption {
				margin-top: 40px;
			}
			.vid-list-container {
				padding-bottom: 20px;
			}

		}
</style>
<script>
/*JS FOR SCROLLING THE ROW OF THUMBNAILS*/ 
$(document).ready(function () {
  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-item .thumb').removeClass('active');
      $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
    });
  });
});
    </script>
  </body>
</html>`

    let enc = encodeURIComponent(ht);
    let uri = `data:text/html;charset=utf-8,${enc}`
    return uri;
}
