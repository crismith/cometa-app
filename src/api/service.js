const API_URL = "http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1";
const requestOptions = {
  headers: { 
    "hash": "OcJn4jYChW",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With"
  }
};

let payments = [];

export async function getStudent() {
  let ruta = API_URL + '/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/';
  try {
    const response = await fetch(ruta, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getStudentOrders() {
  let ruta = API_URL + '/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders';
  try {
    const response = await fetch(ruta, requestOptions);
    const data = await response.json();
    payments = data; 
    return data;
  } catch (error) {
    console.error(error);
  }
}


export function getFeesPaid() {
  let feesPaid = payments.filter((payment) => payment.status === "PAID");
  return feesPaid;
}

export function getPendingInstallments() {
  let pendingInstallments = payments.filter((payment) => payment.status === "DUE");
  return pendingInstallments;
}


export function getFutureInstallments() {
  let futureInstallments = payments.filter((payment) => payment.status === "OUTSTANDING");
  return futureInstallments;
}


