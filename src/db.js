const orders = new Map([["1", { id: "1", total: 4200 }]]);

export const db = {
  orders: {
    list: () => [...orders.values()],
    delete: (id) => orders.delete(id),
  },
};
