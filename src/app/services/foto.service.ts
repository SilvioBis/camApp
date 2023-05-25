import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from '../models/Foto.interface';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  //lista das fotos que estão armazenadas no dispositivo
  fotos: Foto[] = [];
  //cria uma variavel para armazenar o loca fixo das fotos
  private FOTO_ARMAZENAMENT: string = 'fotos';

  constructor() { }


}
