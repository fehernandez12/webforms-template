import Swal, { SweetAlertResult } from "sweetalert2";

export class AlertHelper {
  // Métodos que proveen alertas
  // y diálogos de manera estática
  static errorAlert(message: string) {
    Swal.fire(
      {
        title: '¡Error!',
        text: message,
        icon: 'error'
      }
    );
  }
}
