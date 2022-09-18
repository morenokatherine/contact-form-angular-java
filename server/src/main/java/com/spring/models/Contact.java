package com.spring.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String occupation;
    private String email;
    private String subject;
    private String content;

    public Contact(String name, String occupation, String email, String subject, String content) {
        this.name = name;
        this.occupation = occupation;
        this.email = email;
        this.subject = subject;
        this.content = content;
    }
}
