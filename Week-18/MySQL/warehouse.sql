CREATE DATABASE warehouse;
use warehouse;
-- Create the CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20),
    STATE CHAR(20),
    PRIMARY KEY (CITY)
);
use CITIES;
insert into CITIES (city,state)
values ("Pune","Maharashtra"),
("Mumbai","Maharashtra"),
("Delhi","Delhi"),
("Bangalore","Karnataka"),
("Chennai","Tamil Nadu");

CREATE TABLE WAREHOUSES (
    WID INTEGER,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    EXTRA_CONTEXT JSON,
    PRIMARY KEY (WID),
    FOREIGN KEY (LOCATION) REFERENCES CITIES(CITY)
);


insert into WAREHOUSES (WID,WNAME,LOCATION,EXTRA_CONTEXT)
values (1,"Warehouse A","Pune",'{"capacity": 1000}'),
(2,"Warehouse B","Mumbai",'{"capacity": 800}'),
(3,"Warehouse C","Delhi",'{"capacity": 1200}'),
(4,"Warehouse D","Bangalore",'{"capacity": 900}');

-- Create the STORES table
CREATE TABLE STORES (
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    FOREIGN KEY (LOCATION_CITY) REFERENCES CITIES(CITY)
);

insert into STORES (SID,STORE_NAME,LOCATION_CITY)
values (1,"Store 1","Pune"),
(2,"Store 3","Mumbai"),
(3,"Store 3","Pune"),
(4,"Store 4","Delhi");

-- Create the CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    PRIMARY KEY (CNO),
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

insert into CUSTOMER (CNO,CNAME,ADDR,CU_CITY)
values (101,"Mr. Patil","123 Main St","Pune"),
(102,"Mrs. Sharma","456 Central Ave","Mumbai"),
(103,"Mr. Singh","789 1st Street","Delhi"),
(104,"Ms. Gupta","101 Second Road","Bangalore"),
(105,"Mr. Kumar","456 Third Avenue","Chennai");

-- Create the ORDERS table
CREATE TABLE ORDERS (
    ONO INT PRIMARY KEY,
    ODATE DATE
);

insert into ORDERS (ONO,ODATE)
values (1,"2023-06-15"),
(2,"2023-06-16"),
(3,"2023-06-17"),
(4,"2023-06-18"),
(5,"2023-06-19"),
(101,"2023-05-13");

-- Create the ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(7,2),
    PRIMARY KEY (ITEMNO)
);


insert into ITEMS (ITEMNO,DESCRIPTION,WEIGHT,COST)
values (101,"Laptop",2.5,1200.50),
(102,"Smartphone",0.5,800.00),
(103,"Smartphone",0.5,800.00),
(104,"TV",15.0,1000.00),
(105,"Microwave Oven",10.0,500.00),
(106,"Refrigerator",25.0,1500.00),
(107,"Washing Machine",30.0,1800.00);

-- Create the ORDERS_ITEMS junction table for Many-to-Many relationship
CREATE TABLE ORDERS_ITEMS (
    ORDER_ONO INT,
    ITEM_ITEMNO INT,
    ORDERED_QUANTITY INT,
    FOREIGN KEY (ORDER_ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEM_ITEMNO) REFERENCES ITEMS(ITEMNO)
);

insert into ORDERS_ITEMS (ORDER_ONO,ITEM_ITEMNO,ORDERED_QUANTITY)
values (1,101,2),
(2,102,5),
(3,103,5);

-- Create the STORES_ITEMS junction table for Many-to-Many relationship
CREATE TABLE STORES_ITEMS (
    STORE_SID INT,
    ITEM_ITEMNO INT,
    QUANTITY INT,
    FOREIGN KEY (STORE_SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEM_ITEMNO) REFERENCES ITEMS(ITEMNO)
);

insert into STORES_ITEMS (STORE_SID,ITEM_ITEMNO,QUANTITY)
values (1,101,2),
(2,102,5),
(3,103,5);