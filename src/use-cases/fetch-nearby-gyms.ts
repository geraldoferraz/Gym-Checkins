import { Gym } from "@prisma/client";
import { GymsRepository } from "@/repositories/prisma/gyms-repository";

interface FetchNearbyGymsUseCaseRequest {
    userLatitude: number,
    userLongitude: number
}

interface FetchNearbyGymsUseCaseResponse {
    gyms: Gym[]
}

export class FetchNearbyGymsUseCase {

    constructor(private gymsRepository: GymsRepository){
    }

    async execute({ userLatitude, userLongitude }: FetchNearbyGymsUseCaseRequest): Promise<FetchNearbyGymsUseCaseResponse> { //aqui nos temos o metodo execute que cria um user 

    
       const gyms = await this.gymsRepository.findManyNearby({
            latitude: userLatitude,
            longitude: userLongitude
       })

        return { gyms }
    }
    
}
 
