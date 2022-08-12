import { FormGroup } from '@angular/forms';
export function senhaIguaisValidator(formGroup:FormGroup){
  const confirmarSenha=formGroup.get('confirmarSenha')?.value ?? '';
  const senha=formGroup.get('senha')?.value ?? '';

  if (confirmarSenha.trim() + senha.trim()) {
    return confirmarSenha == senha ? null:{senhaIguais:false}

  } else {
      return null;

  }

}
