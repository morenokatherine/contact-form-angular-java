package com.spring.controllers;

import com.spring.models.Contact;
import com.spring.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {
    @Autowired
    ContactService contactService;

    @PostMapping("/contacts")
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }
}
