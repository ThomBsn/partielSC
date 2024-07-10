# Voici le code pour l'exercice 1 :

````java
interface OrderSystemActions{
    public void addNewOrder(Integer customerID, String itemName);
    public void modifyOrder(Integer customerID, Integer itemIndex, String newItemName);
    public void removeOrder(Integer customerID, Integer itemIndex);
    public void printOrders() ;
}

public class OrderSystem implements OrderSystemActions{
    private Map<Integer, List<String>> orderList; // Liste des commandes
    
    public List<String> getItemsOfCustomer(Integer customerID){
        return orderList.get(customerID);
    }

    public List<String> getItemsOfCustomerOrDefault(Integer customerID, ArrayList defaultArray){
        return orderList.getOrDefault(customerID, defaultArray);
    }

    public void addNewOrder(Integer customerID, String itemName) {
        List<String> itemsOfCustomer = getItemsOfCustomerOrDefault(customerID, new ArrayList<>());
        itemsOfCustomer.add(itemName);
        orderList.put(customerID, items);
    }
    public void modifyOrder(Integer customerID, Integer itemIndex, String newItemName) {
        List<String> itemsOfCustomer = getItemsOfCustomer(customerID);
        if (itemsOfCustomer != null && itemIndex < itemsOfCustomer.size()) {
            itemsOfCustomer.set(itemIndex, newItemName);
        }
    }

    public void removeOrder(Integer customerID, Integer itemIndex) {
        List<String> itemsOfCustomer = getItemsOfCustomer(customerID);
        if (itemsOfCustomer != null && itemIndex < items.size()) {
            itemsOfCustomer.remove(itemIndex);
        }
    }
    public void printOrdersByCustomers() {
        for (Map.Entry<Integer, List<String>> entry : orderList.entrySet()) {
            System.out.println("Customer ID: " + entry.getKey());
            System.out.println("Items: " + String.join(", ", entry.getValue()));
            System.out.println();
        }
    }
}
````

# Voici le code de l'exercice 4 :

````java
public class OrderProcessor {
    private Database database;
    private EmailService emailService;
    private InventorySystem inventorySystem;
    
    public OrderProcessor() {
        this.database = new Database();
        this.emailService = new EmailService();
        this.inventorySystem = new InventorySystem();
    }
    
    private void checkItemAvailability(List<Item> items){
        for (Item item : items) {
            if (!inventorySystem.isItemAvailable(item)) {
                throw new RuntimeException("Item not available in inventory");
            }
        }
    }
    
    private void registerCommand(Order orderToSave){
        database.saveOrder(orderToSave);
    }
    
    private void sendEmailToCustomerOfOrder(Order order){
        String message = "Your order has been received and is being processed.";
        emailService.sendEmail(order.getCustomerEmail(), "Order Confirmation", message);
    }
    
    private void updateInventory(List<Item> items){
        for (Item item : items) {
            inventorySystem.updateInventory(item, item.getQuantity() * -1);
        }
    }
    
    private void applyDiscountForLoyalCustomer(Order order){
        if (order instanceof LoyalCustomerOrder) {
            LoyalCustomerOrder loyalCustomerOrder = (LoyalCustomerOrder) order;
            loyalCustomerOrder.applyDiscount();
        }
    }
    
    public void handleOrderProcessing(Order order) {
        List<Item> items = order.getItems();
        
        checkItemAvailability(items);

        registerCommand(order);

        sendEmailToCustomerOfOrder(order);
        
        updateInventory(items);

        applyDiscountForLoyalCustomer(order);
    }
}
public class LoyalCustomerOrder extends Order {
    @Override
    public void applyDiscount() {
        // Appliquer une remise de 10%
        setTotalPrice(getTotalPrice() * 0.9);
    }
}

````    

# Kata

````typescript










````