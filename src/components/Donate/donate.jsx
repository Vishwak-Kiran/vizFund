import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";


const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress("0x464ccafe6091E94B7B223c496397E931FA3400FC");
    const tx = await signer.sendTransaction({
      to: "0x464ccafe6091E94B7B223c496397E931FA3400FC",
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function Donate(props) {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("0x464ccafe6091e94b7b223c496397e931fa3400fc"),
    });
  };

  return (
    <div id="features" class="containmain">
      <div class="contain">
        <form className="formmain" onSubmit={handleSubmit}>
          <h1 className="sendpay">SEND ETH PAYMENT</h1>
          <div className="">
            <div className="form-group">
              <input
                name="ether"
                type="text"
                className="form-control"
                placeholder="Amount in ETH"
              />
            </div>
          </div>

          <footer className="form-group">
            <button type="submit" className="btn btn-custom btn-lg">
              Pay now
            </button>
            <ErrorMessage message={error} />
            <TxList txs={txs} />
          </footer>
        </form>
      </div>
    </div>
  );
}
