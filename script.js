import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 1000,
  duration: '30s',
};
export default function () {
  http.get('http://promgo.default.svc.cluster.local:2112/');
  sleep(1);
}
