const API_URL = "http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1";
const requestOptions = {
  headers: { 
    "hash": "OcJn4jYChW"
  }
};

let payments = [];

export async function getStudent() {
  try {
    const response = await fetch(`${API_URL}/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getStudentOrders() {
  try {
    const response = await fetch(`${API_URL}/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders`, requestOptions);
    const data = await response.json();
    payments = data; 
    return data;
  } catch (error) {
    console.error(error);
  }
}


export function getFeesPaid() {
  let feesPaid = payments.filter((payment) => payment.status == "PAID");
  return feesPaid;
}

export function getPendingInstallments() {
  let pendingInstallments = payments.filter((payment) => payment.status == "DUE");
  return pendingInstallments;
}


export function getFutureInstallments() {
  let futureInstallments = payments.filter((payment) => payment.status == "OUTSTANDING");
  return futureInstallments;
}


