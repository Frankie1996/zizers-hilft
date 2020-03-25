import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        9.481854,
        46.877326
      ],
      [
        9.569363,
        46.877326
      ],
      [
        9.569363,
        46.847278
      ],
      [
        9.481854,
        46.847278
      ],
      [
        9.481854,
        46.877326
      ]
    ]
  ]
)



const masked = turf.mask(polygon);


export default masked;
