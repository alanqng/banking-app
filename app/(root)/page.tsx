import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {firstName: 'Alan'}
  return (
    <section className="home">
      <div className="home-content">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access or manage your accounts and transactions efficiently."
          />
          <TotalBalanceBox accounts={[]} totalBanks={2} totalCurrentBalance={1250.354} />
      </div>
    </section>
  );
};

export default Home;
