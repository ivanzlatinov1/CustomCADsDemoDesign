import Coordinates, { emptyCoordinates } from "./Coordinates"

export default interface ThreeJSCad {
    id: number
    cadPath: string
    camCoordinates: Coordinates
    panCoordinates: Coordinates
}

export const emptyThreeJSCad: ThreeJSCad = {
    id: 0,
    cadPath: '/assets/models/home_model.gltf',
    camCoordinates: { x: 0, y: 0, z: 5 },
    panCoordinates: emptyCoordinates,
};