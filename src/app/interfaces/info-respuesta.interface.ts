import { InfoTrabajador } from './info-trabajador.interfce';
import { InfoPregunta } from './info-pregunta.interface';

export interface InfoRespuesta {
    pregunta_id?: number;
    trabajador_id?: number;
    respuesta?: string;
}