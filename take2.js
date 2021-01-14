const fetch = require('node-fetch')
const imageDownloader = require('node-image-downloader')

const extensions = [505, 500, 503, 502, 501, 406, 442, 80, 85, 508, 465, 229, 82, 210, 81, 87, 88, 90, 91, 93, 94, 96, 97, 98, 99, 100, 101]
const loftConversions = [471, 470, 466, 437, 232, 215, 224, 230, 229, 227, 221, 217, 218, 216, 213]
const bathrooms = [566, 565, 564, 563, 562, 561, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 524, 525, 526, 528, 529, 530, 531]
const kitchens = [736, 737, 739, 738, 740, 733, 729, 730, 731, 732, 505, 504, 502, 503, 533, 535, 534, 536, 154, 158, 159, 160, 161, 162, 166, 167, 255]
const groundworks = [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137]
const decking = [72, 73, 74, 75, 76, 77, 78, 79]
const garageConversions = [103, 104, 105, 106, 107, 108, 109]
const internalFinishes = [138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149]
const largeCarpentryContracts = [168, 169, 170, 171, 172]
const refurbishments = [233, 234]
const roofing = [235, 236, 237, 238, 239, 240, 241, 242, 243, 245, 246]
const windowDoors = [248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263]
const conservatories = [71]

const downloadImage = (images, destination) => {
  images.forEach(async (image) => {
    try {
      const response = await fetch(`https://jgdesignandbuild.co.uk/wp-json/wp/v2/media/${image}`)
      const data = await response.json()
      imageDownloader({
        imgs: [
          {
            uri: `${data.guid.rendered}`,
          },
        ],
        dest: `./${destination}`,
      })
        .then((info) => {
          console.log('all done', info)
        })
        .catch((error, response, body) => {
          console.log('something goes bad!')
          console.log(error)
        })
    } catch (err) {
      console.log(image + ': ' + err)
    }
  })
}

downloadImage(extensions, 'extensions')