import Swal, {SweetAlertIcon} from 'sweetalert2'

export function confirm(title: string, content: string) {
  return Swal.fire({
    title,
    icon: 'question',
    html: content,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  })
}

export function alert(message: string, icon: SweetAlertIcon = 'info') {
  Swal.fire({
    icon: icon,
    html: message,
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText: 'Ok',
  }).then()
}
