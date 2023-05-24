import Accounts from "@/components/accounts/Accounts";
import Login from "@/components/login/Login";
import Container from "@/components/global/container/Container";
import Register from "@/components/register/Register";
import Mobile from "@/components/mobile/Mobile";
import Layout from "@/components/global/layout/Layout";




const Home = () => {
  return (
      <Layout>
          <div className='wrapper'>
              <Container>
                  <div className={'flex justify-between'}>
                      <div>
                          <Accounts/>
                          <Mobile/>
                      </div>
                      <div>
                          <Login/>
                          <Register/>
                      </div>
                  </div>
              </Container>
          </div>
      </Layout>
  )
}
export default Home