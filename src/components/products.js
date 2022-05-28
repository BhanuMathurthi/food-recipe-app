export default function Products({ data }) {
  return (
    <div>
      <div className="row">
        {data.map((productData) => (
          <div className="col-lg-4 col-md-6">
            <div
              className="card mb-5 shadow p-3 mb-5 bg-white rounded"
              style={{ width: "22rem" }}
            >
              <img
                className="card-img-top"
                height="200"
                width="250"
                src={productData.recipe.image}
                alt="Card-img-top"
              />
              <div className="card-body pb-4">
                <center>
                  <h5 className="card-title pb-2 ">
                    {" "}
                    {productData.recipe.label}{" "}
                  </h5>
                  <p className="card-title pb-3">
                    Total amount of calories:{" "}
                    {Math.round(productData.recipe.calories)}{" "}
                  </p>
                  <button type="button" class="btn btn-success ">
                    Buy
                  </button>

                  {/* <a href="#" className="btn btn-success btn-lg btn-block">
                    Buy
                  </a> */}
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
