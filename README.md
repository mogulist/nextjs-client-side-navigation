# Next.js의 Client-side navigation 분석

### Client-side navigate to SSR page

SSR을 하는 페이지(getServerSideProps()가 정의되어 있는 페이지)로 Client-side navigation(이하 CSN)을 하는 경우

- SSR은 발생하지 않지만, 서버에 getServerSideProps() 를 요청한다.
- 클라이언트는 getServerSideProps()가 리턴한 데이터로 CSR 한다

만약 A -> B로 CSN 하는데 B의 gSSP() 가 오래 걸리면 페이지 A 에 한참머무르게 되는 불편한 현상을 겪게 된다.
