import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.containImg}>
      <img src="/assets/2.jpg" alt="landing" className={classes.mainImage} />
      <div className={classes.sec}>
        <h3 className={classes.title}>Financial Solutions</h3>
        <p className={classes.desc}>
          We are a leading financial services firm that focuses on working with
          business owners, entrepreneurs, and professionals.
        </p>
        <button className={classes.btn}>generate business plan</button>
      </div>
    </div>
  );
};

export default Header;
