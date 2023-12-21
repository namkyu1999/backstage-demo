import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '3m', target: 10000 },
    { duration: '10m', target: 20000 },
    { duration: '5m', target: 0 },
  ],
};

export default function () {
  http.get('http://promgo.default.svc.cluster.local:2112/');
  sleep(1);
}
