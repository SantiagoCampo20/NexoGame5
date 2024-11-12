'use strict'

const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const token = 'IGQWRPeU9XdTlOZAkkxVmdvdTNLamJUMGNWZAXlwWldIblo4TjRISk1WOUhBVTlKVGx4RGZA6d2lVdlBuWVFKTFpfa0NLYkFIa2ZAxaEFCTTRNY1Y5Wk9pekxQVVVFZAXNMMHUzUmV2OWU4blY3R2RGNDBQcFhFT19LQk0ZD'
const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=80&access_token=IGQWRPeU9XdTlOZAkkxVmdvdTNLamJUMGNWZAXlwWldIblo4TjRISk1WOUhBVTlKVGx4RGZA6d2lVdlBuWVFKTFpfa0NLYkFIa2ZAxaEFCTTRNY1Y5Wk9pekxQVVVFZAXNMMHUzUmV2OWU4blY3R2RGNDBQcFhFT19LQk0ZD`;

fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))

function CrearHtml(data){
    for (const img of data){
        galery.innerHTML += `
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>
                    ${img.caption.slice(0, 100)} 
                </p>
            </a>
        </div>
        </div>
        `;
    }

}




/*
const accessToken = 'IGQWRPcjY5Q1NZAU3dtU0RHUEtpSHRFUFBnbG12eEFiQklVVHV4S3dZANXBHWl9sb2dxZAThNNmhKc2RBdVpkYlpWVVRwRlJVcmFPRjZAfdWFQaVVOQTkwZAE9lMXFLbmRMMEpPWEE3RkxNWVVmV0JNT0RNVHBJY096SHcZD';
const photosGrid = document.getElementById('insta-photos');

// Verificar que el contenedor existe antes de continuar
if (!photosGrid) {
  console.error('Error: Contenedor "insta-photos" no encontrado en el HTML.');
} else {
  async function fetchInstagramPhotos() {
    try {
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
      const data = await response.json();
      
      // Verificar si data y data.data son válidos
      if (!data || !data.data) {
        console.error('Error: Respuesta de la API no contiene datos esperados:', data);
        return;
      }

      data.data.forEach(photo => {
        if (photo.media_type === 'IMAGE' || photo.media_type === 'CAROUSEL_ALBUM') {
          const img = document.createElement('img');
          img.src = photo.media_url;
          img.alt = photo.caption || 'Instagram photo';
          img.style.width = '150px';  // Ajusta el tamaño según tu preferencia
          img.style.margin = '10px';

          const link = document.createElement('a');
          link.href = photo.permalink;
          link.target = '_blank';
          link.appendChild(img);
          
          photosGrid.appendChild(link);
        }
      });
    } catch (error) {
      console.error('Error fetching Instagram photos:', error);
    }
  }

  // Llamar a la función para cargar las fotos
  fetchInstagramPhotos();
}*/

