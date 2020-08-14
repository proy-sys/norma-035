import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoGuias } from '../interfaces/info-guias.interface';
import { InfoRespuesta } from '../interfaces/info-respuesta.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoComunicacionService {
    respuesta: InfoRespuesta = {};

    private enviarRespuestasSubject = new Subject<InfoRespuesta>();
    public enviarRespuestasOb = this.enviarRespuestasSubject.asObservable();

    enviarRespuestas(respuesta: InfoRespuesta){
      this.respuesta = respuesta;
      this.enviarRespuestasSubject.next(respuesta);
    }


}
