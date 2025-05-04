import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,            // number of virtual users
  duration: '30s',    // total test duration
  thresholds: {
    http_req_failed: ['rate<0.01'],     // <1% errors
    http_req_duration: ['p(95)<200'],   // 95% under 200ms
  },
};

export default function () {
  const res = http.get('https://hoooobank.netlify.app/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'no content errors': (r) => r.body && r.body.length > 0,
  });

  sleep(1);
}
