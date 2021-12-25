import Swal from 'sweetalert2'

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
