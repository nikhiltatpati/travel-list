import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid black",
  margin: 10,
  padding: 10,
  textAlign: "left",
  borderRadius: "5px",
  cursor: "pointer",
};

class CityActivities extends React.Component {
  state = {
    items: [],
    hasMore: true,
    fetchedData: [],
    url: ["task02/posts", "task03/posts", "task04/posts"],
    urlNo: 0,
  };

  componentDidMount() {
    fetch("http://my-json-server.typicode.com/rivitest001/task01/posts")
      .then((res) => res.json())
      .then((data) => {
        const resData = data.splice(0, 10);
        this.setState({ items: resData, fetchedData: data });
      });
  }

  fetchMoreData = () => {
    if (this.state.fetchedData.length <= 10) {
      if (this.state.urlNo > 2) {
        if (this.state.items.length >= 50) {
          this.setState({ hasMore: false });
          return;
        }
      }
      fetch(
        `http://my-json-server.typicode.com/rivitest001/${
          this.state.url[this.state.urlNo]
        }`
      )
        .then((res) => res.json())
        .then((res) => {
          const resData = res.splice(0, 10);
          this.setState((prev) => {
            return {
              fetchedData: [...prev.fetchedData, ...res],
              urlNo: prev.urlNo + 1,
              items: [...prev.items, ...resData],
            };
          });
        });
    } else {
      const tempData = this.state.fetchedData;
      const resData = tempData.splice(0, 10);
      this.setState((prev) => {
        return { items: [...prev.items, ...resData], fetchedData: tempData };
      });
    }
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={380}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((item) => (
            <div style={style} className="card" id={item.id}>
              {item.activity}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
export default CityActivities;
