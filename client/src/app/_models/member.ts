import { Photo } from "./Photo"

export interface Member {
    id: number
    userName: string
    publicUrl: string
    age: number
    knownAs: string
    created: Date
    lastActive: Date
    gender: string
    introduction: string
    lookingFor: string
    interests: string
    city: string
    country: string
    photos: Photo[]
}

