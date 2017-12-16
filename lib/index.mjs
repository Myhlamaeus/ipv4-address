import { IPv4Address } from './IPv4Address';

export { IPv4Address };

export function parse(addr) {
  return IPv4Address.parse(addr);
}

export default function(addr) {
  if (typeof addr === 'string') {
    return parse(addr);
  }

  return IPv4Address.from(addr);
}
