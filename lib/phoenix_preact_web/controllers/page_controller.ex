defmodule PhoenixPreactWeb.PageController do
  use PhoenixPreactWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
