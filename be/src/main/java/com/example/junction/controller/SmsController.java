package com.example.junction.controller;

import com.example.junction.model.MessageDto;
import com.example.junction.model.SmsResponseDto;
import com.example.junction.service.SmsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestClientException;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

@Controller
@RequiredArgsConstructor
public class SmsController {
    private final SmsService smsService;

    @PostMapping("/sms/send")
    @ResponseBody
    public SmsResponseDto sendSms(@RequestBody MessageDto messageDto) throws JsonProcessingException, RestClientException, URISyntaxException, InvalidKeyException, NoSuchAlgorithmException, UnsupportedEncodingException {
        SmsResponseDto response = smsService.sendSms(messageDto);
        return response;
    }
}
