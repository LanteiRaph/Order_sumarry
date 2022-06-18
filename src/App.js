import "./styles.css";

export default function App() {
  return (
    <div className="flex-container">
      <div className="content">
        <div className="row">
          <div className="col image">
            <img src="" alt="Sumarry" />
          </div>
          <div className="col info">
            <div className="content_title">
              <h1>Order Sumarry</h1>
              <p>
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div>
              <i />
              <div>
                <h2>Annual Plan</h2>
                <p>$59.99/year</p>
              </div>
              <button>Change</button>
            </div>
            <div>
              <button>Proceed to Payment</button>
              <button>Cancel Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
