package com.anusha.crud.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.anusha.crud.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer,Long>{

	List<Customer> findByLastName(String lastName);
}
