import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { makeCheckinUseCase } from "@/use-cases/factories/make-checkin-use-case";
import { makeValidateCheckinUseCase } from "@/use-cases/factories/make-validate-checkin-use-case";


export async function validate (request: FastifyRequest, response: FastifyReply) {

    const validateCheckinParamsSchema = z.object({
        checkInId: z.string().uuid()
    })

    const { checkInId } = validateCheckinParamsSchema.parse(request.params)

        const validateCheckinUseCase = makeValidateCheckinUseCase()

        await validateCheckinUseCase.execute({ 
            checkInId, 
        })

    return response.status(204).send()
}