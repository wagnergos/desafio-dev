import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatToBrDate(date) {
  return format(parseISO(date), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  });
}
